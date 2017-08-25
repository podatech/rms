import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'major-detail',
	templateUrl: './major-detail.component.html',
	styleUrls: ['./major-detail.component.css']
})
export class MajorDetailComponent implements OnInit, OnDestroy {
	private routeSub:any;
	slug:string;

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.routeSub = this.route.params.subscribe(params => {
			this.slug = params['slug'];
		})
	}

	ngOnDestroy(){
		this.routeSub.unsubsrcibe();
	}
}
