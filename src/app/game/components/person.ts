export class Person
{
	name: string = '';
	posX: number = null;
	posY: number = null;
	width: number = 30;
	height: number = 30;
	clicked: Boolean = false;

	constructor() {}

	getPos()
	{
		return [this.posX, this.posY];
	}

	getSize()
	{
		return [this.width, this.height];
	}
}