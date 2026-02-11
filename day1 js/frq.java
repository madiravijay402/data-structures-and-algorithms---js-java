
import java.util.*;

public class frq{


    public static void main(String[] args) {
        ArrayList<Integer> fc=new ArrayList<Integer>();
        fc.add(4);
        fc.add(5);
        fc.add(5);
        fc.add(4);
        fc.add(5);
        HashMap<Integer,Integer> frqNum=new HashMap<>();
        for(int num:fc){
            frqNum.put(num, frqNum.getOrDefault(num, 0)+1);
        }
        int mode=0;
        int maxFrq=-1;
        for(int key: frqNum.keySet()){
            if(key>frqNum.get(key)){
                mode=key;
                maxFrq=frqNum.get(key);
            }
        }
        System.out.println("mode : "+mode);
        System.err.println("frequency : "+maxFrq);
    }
}