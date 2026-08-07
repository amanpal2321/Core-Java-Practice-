package Encapsulation;

public class Student {
	private String name;
	private int rollno;
	private String section;
	
	Student(){
	}
	
	Student(String name, int rollno, String section){
		setName(name);
		setRollno(rollno);
		setSection(section);
	}
	public void setName(String name) {
		if(name.length()>=2 && !name.isBlank()) {
			this.name=name;
		}
		
	}
	 public String getName() {
		 return name;
	 }
	public void setRollno(int rollno) {
			this.rollno=rollno;
	}
	public int getRollno() {
		return rollno;
	}
	public void setSection(String section) {
			this.section=section;
	}
	public String getSection() {
		return section;
	}

}
