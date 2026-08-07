package Encapsulation;

public class Studentdriver {
	public static void main(String[] args) {
		System.out.println("=============Student S1 Details============");
		Student s1 = new Student("Aman", 14, "A");
		System.out.println("Student Name: "+ s1.getName());
		System.out.println("Student Rollno: "+s1.getRollno());
		System.out.println("Student Section: "+ s1.getSection());
		
		System.out.println("=============Student S2 Details============");
		Student s2 = new Student("Deepak", 54, "C");
		System.out.println("Student Name: "+ s2.getName());
		System.out.println("Student Rollno: "+s2.getRollno());
		System.out.println("Student Section: "+ s2.getSection());
	}

}
