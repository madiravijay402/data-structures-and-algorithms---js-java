
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

public class practice {
    public static void main(String[] args) {
        ArrayList<Integer> num=new ArrayList<>();
        num.add(0);
        num.add(3);
        num.add(1);
        num.add(3);
       System.out.println(num.get(1)); 
       HashSet<Integer> n=new HashSet<Integer>();
       n.add(12);
       n.add(23);
       n.add(231);

       System.out.println(n);
       if(n.contains(12)){
            System.out.println("yes available");
       }
       else{
        System.out.println(" not available");
       }
       HashMap<Integer,Integer> frq=new HashMap<>();
    //    frq.put(2,3);
    //    frq.put(1,2);
    //    int value1=frq.getOrDefault(2,0 );
    //    int value2=frq.getOrDefault(3, 0);
    //    System.out.println(value1);
    //    System.err.println(value2);

       for(int fc:num){
        frq.put(fc,frq.getOrDefault(fc, 0)+1);
       }
       int mode=-1;
       int frequency=0;
       for(int key:frq.keySet()){
        if(frq.get(key)>frequency){
            frequency=frq.get(key);
            mode=key;
        }
       }
       System.out.println("Mode : "+mode);
       System.err.println("Frq : "+frequency);
    }
}
