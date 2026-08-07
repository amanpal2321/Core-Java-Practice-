package Inheritance;

public class Fruit extends Produvt1{
	String name;
	String season;
	
	Fruit(){
	}
	Fruit( double price, String color, String name, String season){
		super(price, color);
		this.name=name;
		this.season=season;
	}
 public String toString() {
	 return super.toString(price, color)+"\nProduct Name is:"+name+"\nProduct Season is:"+season;
 }
}
