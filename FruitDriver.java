class FruitDriver{
	public static void main(String[] args){
			Fruit f1=new Fruit();
			Fruit f2=new Fruit();
			Fruit f3=new Fruit();
         
			f1.setDetails("Mango", 120, 5);
			f2.setDetails("Apple", 180, 2);
			f3.setDetails("Orange", 150, 1);

			f1.printDetails();
 			f2.printDetails();
			f3.printDetails();
}
}