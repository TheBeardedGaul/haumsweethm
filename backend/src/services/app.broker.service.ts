import * as mqtt from 'mqtt';

export class BrokerService {
    private _client: mqtt.MqttClient;
    private _listLaumio : Array<String>;
    
    constructor(serverURL: string) {
        this._client = mqtt.connect(serverURL);
        this._client.on('connect', this.handleConnexion);
        this._client.on('message', this.handleMessage);
    }
    
    private handleConnexion() {
        console.log('connection...');
        for (key in listTopic) {((key) => {
            this._client.subscribe(key, (err) => {
                console.log('subscribe to "' + key + '" : ' + (err || 'No error'));
                if (!err && key == 'laumio/status/advertise') {
                    console.log('Detecting laumio...');
                    this._client.publish('laumio/all/discover', '');
                }
            });
        })(key);}
    }
    
    private handleMessage(topic, message) {
        message = message.toString();
        console.log(topic + ' : ' + message);
        if (listTopic[topic] != undefined) {
            listTopic[topic](message);
        } else {
            console.log('Unknow topic : ' + topic + ' => ' + message);
        }
    }
    
    display(targets, parameters) {
        if (!parameters || parameters.length == 0) return; // Condition d'arret.
        var cur = parameters[0];
        var out = '';
        var type = cur[0];
        var wait = cur[1];
        switch(type) {
            case 'fill': out = ", 'rgb': ["+cur[2]+","+cur[3]+","+cur[4]+"]"; break;
            case 'set_ring': out = ", 'ring': "+cur[5]+", 'rgb': ["+cur[2]+","+cur[3]+","+cur[4]+"]"; break;
            case 'set_column': out = ", 'column': "+cur[5]+", 'rgb': ["+cur[2]+","+cur[3]+","+cur[4]+"]"; break;
            case 'set_pixel': out = ", 'led': "+cur[5]+", 'rgb': ["+cur[2]+","+cur[3]+","+cur[4]+"]"; break;
            case 'color_wipe': out = ", 'duration': "+wait+", 'rgb': ["+cur[2]+","+cur[3]+","+cur[4]+"]"; break;
            default: break;
        }
        console.log("SEND {'command': '" + type + "'" + out + "}");
        targets.forEach(laumioId => {
            this._client.publish('laumio/' + laumioId + '/json', "{'command': '" + type + "'" + out + "}");
        });
        if (wait > 0) {
            setTimeout(this.display, wait, targets, parameters.slice(1));
        } else {
            this.display(targets, parameters.slice(1));
        }
    }
}