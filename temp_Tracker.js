   
function insert()
{
    temp.push(45);
    temp.push(130);
}
function sort(temp)   // This is a sorting Function.
{
    var tmp;
    for(var i = 0; i < temp.length; i++){
      for(var j = i + 1; j < temp.length; j++){
        if(temp[i] > temp[j]){
          tmp = temp[i];
          temp[i] = temp[j];
          temp[j] = tmp;
        }
      }
    }
    return temp
  }

  function get_min(arr) // To find out the minimum value from a sorted array.
  {
    return arr[0];
  }

  function get_max(max) // To find out the maximum value from a sorted array.
  { 
    return max[max.length-1];
  }
  function mean(arr){  //  To find out the mean from an array.
    var sum=0;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    } 
   return sum/arr.length;
}
function mode(numbers)  // To find out the mode from an array.
{  
    var modes = [], count = [], i, number, maxIndex = 0;
    for (i = 0; i < numbers.length; i += 1) 
    {
        number = numbers[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) 
        {
            maxIndex = count[number];
        }
    }
 
    for (i in count)
    {
            if (count[i] === maxIndex) 
            {
                modes.push(Number(i));
       
        }
    return modes;
}
  function main()
  {
    var temp = [50,60,40,140,70,80,100,110,30,30];
    var a= sort(temp);
    for(let i=0;i<a.length;i++)
    {
        console.log(a[i]);
    }
    console.log(get_min(a));
    console.log(get_max(a));
    console.log(mean(a));
    console.log(mode(a));
  }
  console.log(main());
