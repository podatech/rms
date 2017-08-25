import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'major-list',
	templateUrl: './major-list.component.html',
	styleUrls: ['./major-list.component.css']
})
export class MajorListComponent implements OnInit {
	title = "Major List";
	majorList = [
			{
				name: "Information Technology Management",
				description: "IT managers supervise information technology departments and ensure that all systems run smoothly. Students who major in information technology management can earn a higher-than-average salary after graduation. Earnings are often dependent on employer and experience level, but in general, IT professionals with an MBA earn more than those with only a bachelor's degree.",
				slug: "information-technology-management"
			},
			{
				name: "Software Engineering",
				description: "Software engineering majors learn to develop and test computer software and systems. Most software engineers specialize in either systems or applications. On average, engineers who work with systems earn slightly more than those who work with applications. A bachelor's degree is almost always necessary for either specialization, but a graduate degree is usually preferred.",
				slug: "software-engineering"
			},
			{
				name: "Database Administration",
				description: "Students who major in database administration ensure database systems are secure, organized and working properly. Most database administrators work for search portals, Internet service providers, government agencies and data processing firms. Earnings can vary by industry; database administration majors who work in computer systems design and similar industries tend to earn the most.",
				slug: "database-administration"
			},
			{
				name: "Video Game Programming",
				description: "Video game programmers work with various software systems to program games for computers, consoles and other gaming devices. Higher salaries and promotions may be awarded to those who stay on the cutting edge of this ever-changing field.",
				slug: "video-game-programming"
			},
			{
				name: "Web Development",
				description: "Web developers create and program content for websites. Although a degree is not always required in this industry, many employers prefer to see some type of education or proof of expertise, like professional certification.",
				slug: "web-development"
			},
			{
				name: "Computer Programming",
				description: "Computer programming majors learn to write and test computer programs. A degree is not always required for this career, but it's easier to secure a job with some type of education or certification. The best-paid programmers may earn $100,000 or more per year.",
				slug: "computer-programming"
			},
			{
				name: "Network Engineering",
				description: "Network engineering majors are responsible for the design and implementation of local area networks (LAN) and wide area networks (WAN). A degree is almost always a must to secure a position as a network engineer. Certifications are also highly recommended.",
				slug: "network-engineering"
			},
			{
				name: "Game Design",
				description: "Game designers create video games for computers, consoles and other gaming devices. Entry-level game designers with less than 3 years of experience can make about $54,600 per year. The video game design industry is one of the fastest growing areas of the tech sector; it's also very competitive.",
				slug: "game-design"
			},
			{
				name: "System Administration",
				description: "System administrators design, install and maintain computer systems. Some system administrators are also responsible for supporting entire networks. A degree is not always required; experience and certifications can sometimes be substituted for a formal education. However, system administrators who have at least a bachelor's degree tend to have an advantage in the job market.",
				slug: "system-administration"
			},
			{
				name: "Network Management",
				description: "Network managers oversee a variety of different networks, including computer networks and fiber optic networks. Students who earn a degree in network management may end up working as operators, administrators or planners. Experienced network management professionals can earn significantly more than entry-level professionals.",
				slug: "network-management"
			}
		];
	constructor() { }
	
	ngOnInit() {
	}

}
