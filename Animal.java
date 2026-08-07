class Animal{
	String name;
	int age;
	int no;
public void setDetails(String name, int age, int no){
		
			this.name=name;
			this.age=age;
			this.no=no;
}
public void printDetails(){
		System.out.println("Animal name is: " +name);
		System.out.println("Animal Average Age is: " +age);
		System.out.println("Animal Population: " +no);
		System.out.println("================================");
}
}
	