import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-infos',
    templateUrl: './infos.component.html',
    styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {
    name = '';
    address = '';
    infoId = '';
    saved = false;
    constructor(private httpClient: HttpClient) { }

    ngOnInit() {
        this.getInfos();
    }

    getInfos() {
        this.httpClient.get('https://sports-now-dx.firebaseio.com/customers.json?orderBy="code"&equalTo="per-bombonera"').
            subscribe(data => {
                const keys = Object.keys(data);
                this.infoId = keys[0];
                if (keys.length) {
                    this.name = data[this.infoId].name;
                    this.address = data[this.infoId].address;
                }
            });
    }
    saveInfos() {
        this.saved = false;
        this.httpClient.patch(`https://sports-now-dx.firebaseio.com/customers/${this.infoId}.json`,
            {
                'name': this.name,
                'address': this.address
            }
        ).
            subscribe(data => {
                this.saved = true;
            });
    }

}
