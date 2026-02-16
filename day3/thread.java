class A extends Thread{
    public void run(){
       for(int i=1;i<=5;i++){
        System.err.println("A :"+i);
       }
    }
}

class B extends Thread{
    public void run(){
        for(int i=5;i>=1;i--){
            System.out.println("B :"+i);
        }
    }
}

class thread{
    public static void main(String[] args) throws InterruptedException {
        A t1=new A();
        B t2=new B();
        t1.start();
        t1.join();
        t2.start();


    }
}