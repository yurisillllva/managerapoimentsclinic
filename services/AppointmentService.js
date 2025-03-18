const AppointmentFactory = require("../factories/AppointmentFactory");
var appointment = require("../models/Appointment");
var mongoose = require("mongoose");
var nodemailer = require("nodemailer");

const Appo = mongoose.model("Appointment",appointment);

class AppointmentService {

    async Create(name, email, description, cpf, date, time){
        var newAppo = new Appo({
            name,
            email,
            description,
            cpf,
            date,
            time,
            finished: false,
            notified: false
        });

        try {
            await newAppo.save();
            return true;
        } catch (error) {
            console.log(error.mesage);
            
        }
    }

    async GetAll(showFinished){
        
        if(showFinished){
            return await Appo.find();
        }else{
            var appos = await Appo.find({'finished': false});
            var appointments = [];

            appos.forEach(appointment => {
                if(appointment.date != undefined){
                    appointments.push( AppointmentFactory.Build(appointment) )
                }
                
            });

            return appointments;
        }
    }

    async GetById(id){
        try {
            var event = await Appo.findOne({'_id': id});
            return event;
        } catch (error) {
            console.log(err);
        }
    }

    async Finish(id){
        try {
            await Appo.findByIdAndUpdate(id,{finished: true})    ;
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async Search(query){
        try {
            var appos = Appo.find().or([{email: query},{cpf: query}]);
            return appos;
        } catch (error) {
            console.log(error);
            return [];
        }
    }

    async SendNotification(){
        var appos = await this.GetAll(false);

        var trasnporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
            user: "ysm281@gmail.com",
            pass: "ienh hzhc eduu laof"
    }
        });

        appos.forEach(async app => {

            var date = app.start.getTime();
            var hour = 1000 * 60 * 60;
            var gap = date-Date.now();

            if(gap <= hour){
                if(!app.notified){

                    await Appo.findByIdAndUpdate(app.id,{notified: true});

                   trasnporter.sendMail({
                        from: "Yuri Silva <ysm281@gmail.com",
                        to: "ydamartins@bol.com.br", /* app.email */
                        subject: "Lembrete da sua consulta",
                        text: "Fala seu/sua putX!!! tá ligado que a sua consulta é amanhã, não esqueça seu saco cheio de vacilo"
                   }).then( () => {

                   }).catch(err => {
                    console.log(err);
                   })
                }
            }
        })
    }
}


module.exports = new AppointmentService();