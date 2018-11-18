import { Person } from './person';

export class Npc extends Person
{
	message: string = '';

	constructor(name, message, posX, posY)
	{
		super();
		this.name = name;
		this.message = message;
		this.posX = posX;
		this.posY = posY;
		this.width = 30;
		this.height = 30;
	}
}