import { Player } from './player';
import { Npc } from './npc';

export class Game
{
	frame: any = null;
	ctx: any = null;
	player: Player = null;
	npcs: Array<Npc> = [];


	constructor()
	{
	  	this.init();
	}

	init()
	{
		this.frame = document.getElementById("game");
	  	
	  	this.player = new Player();

	  	this.npcs.push(new Npc("PHPedro",
	  		"Olá! As pessoas na cidadela falam de você. Uma nova pessoa que está procurando "
	  		+ "um guerreiro para os desafios do seu cotidiano",
	  		460,
	  		180)
	  	);
	  	this.ctx = this.frame.getContext('2d');
	  	setInterval(() => {
	  		this.updateFrame();
	  	}, 20);

	  	this.frame.addEventListener('click', (e) => {
		    const mouseX = e.clientX - this.frame.offsetLeft;
		    const mouseY = e.clientY - this.frame.offsetTop;

		    this.player.click();

	  	});
	}

	updateFrame()
	{
		let self = this;
		const bg = new Image();
		bg.src = "/assets/images/bg.png";

	  	bg.onload = function(){
	  		const you = new Image();
	  		const pos = self.player.getPos();
	  		const size = self.player.getSize();
	  		let x = pos[0];
	  		let y = pos[1];
		    let w = size[0];
		    let h = size[1];
		    you.src="/assets/images/you.png";

		    self.ctx.clearRect(0, 0, self.frame.width, self.frame.height)
		    self.ctx.drawImage(bg, 0, 0);
		    //self.ctx.fillStyle = "#2f4740";
		    self.ctx.drawImage(you, x, y, w, h);

		    // Ploting the NPCs
		    for (let i = 0; i < self.npcs.length; i ++) {
		    	
		    	const imgPerson = new Image();
		    	imgPerson.src="/assets/images/person.png";
		    	const npcPos = self.npcs[i].getPos();
		  		const npcSize = self.npcs[i].getSize();
		  		let npcX = npcPos[0];
		  		let npcY = npcPos[1];
			    let npcW = npcSize[0];
			    let npcH = npcSize[1];
			    //self.ctx.fillStyle = "#8ff070";
				self.ctx.drawImage(imgPerson, npcX, npcY, npcW, npcH);	  			
	  		}

	  		self.player.walkTo(x, 220);
		}
	}
}