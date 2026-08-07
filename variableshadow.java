public class Main{
 int x = 50;

public void test(){
int x = 80;
 System.out.println("number :" + x);
 System.out.println(this);
 System.out.println(this.x);
}

public static void main(String[] args){
 test();
}

 