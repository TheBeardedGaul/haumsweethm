import { Injectable } from "@nestjs/common";
import { BrokerService } from "./app.broker.service";
import { LaumioService } from "./app.laumio.service";

// var volume = 0;
// const listTopic = {
//     'laumio/status/advertise' : function(message){
//         if(message == 'discover') return;
//         console.log('Ajout de "'+message+'"');
//         listeLaumio.push(message);
//     },
//     'capteur_bp/switch/led1/state' : function(message){
//         display(listeLaumio.slice(2,4), anim1);
//     },
//     'capteur_bp/switch/led2/state' : function(message){
//         display(listeLaumio.slice(2,4), anim2);
//     },
//     'capteur_bp/switch/led3/state' : function(message){
//         display(listeLaumio.slice(2,4), anim3);
//     },
//     'capteur_bp/switch/led4/state' : function(message){
//         display(listeLaumio.slice(2,4), radar);
//     },
//     'remote/prev/state' : function(message){
//         client.publish('music/control/previous', '');
//     },
//     'remote/next/state' : function(message){
//         client.publish('music/control/next', '');
//     },
//     'remote/playp/state' : function(message){
//         client.publish('music/control/toggle', '');
//     },
//     'remote/minus/state' : function(message){
//         if (volume > 0) volume -= 5;
//         client.publish('music/control/setvol', volume);
//     },
//     'remote/plus/state' : function(message){
//         if (volume < 100) volume += 5;
//         client.publish('music/control/setvol', volume);
//     }
// };

@Injectable()
export class AnimationService {

    private anim3 = [
        ['fill', 100, 0, 0, 0],
        ['set_ring', 300, 250, 0, 0, 0],
        ['set_ring', 300, 0, 250, 0, 1],
        ['set_ring', 300, 0, 0, 250, 2]
    ];

    private brokerService: BrokerService = new BrokerService("mqtt://mpd.lan");

    constructor(private readonly laumioService: LaumioService) {}

    public sendAnimation3(targets: string[]) {
        this.brokerService.display(targets, this.anim3);
    }
}
