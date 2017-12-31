export class Recipe {
	public name: string;
	public description: string;
	public image_path: string;

	constructor(name: string, description: string, image_path: string) {
		this.name = name;
		this.description = description;
		this.image_path = image_path;
	}
}
