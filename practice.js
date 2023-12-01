let arr=[2,0,3,0,4,5,8,0,9,34]
let length=arr.length
for(i=0;i<arr.length;i++){
    for(j=1+1; j<arr.length;j++){
        if(arr[j==0]){
            arr.splice(j,1)
            arr.push(0)
        }
    }
}
console.log(arr)