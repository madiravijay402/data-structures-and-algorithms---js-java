

class secondlarge{
    public static void main(String[] args) {
        // Scanner ob1=new Scanner(System.in);
        int[] arr={12,10,23,2,40};
        int largest=arr[0];
        int secondlargest=arr[0];
        for(int i=0;i<arr.length;i++){
            if(arr[i]>largest){
                secondlargest=largest;
                largest=arr[i];
            }
            // else if(arr[i]> secondlargest && arr[i]!=largest){
            //     secondlargest=arr[i];
            // }
        }
        System.err.println("second largest :"+secondlargest);
        
        // HashSet<Integer> num=new HashSet<>();
        // num.add(5);
        // num.add(61);
        // num.add(4);
        // num.add(12);
        // num.add(11);
        // System.out.println(num.get(num.length()-1));

    }
}