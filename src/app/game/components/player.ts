import { Person } from './person';

export class Player extends Person
{
	constructor()
	{
		super();
		this.name = "Who r u";
		this.width = 30;
		this.height = 30;
		this.posX = 460;
		this.posY = 370;
	}

	click()
	{
		if (this.clicked)
			this.clicked = false;
		else
			this.clicked = true;
	}

	walkTo(x, y)
	{
		if (this.posY > y && this.clicked) {
			this.posY = this.posY - 2;
		}
	}
}