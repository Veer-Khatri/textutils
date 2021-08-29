const veer = 'veeru khatri';
const a  = 34 ;
const b = true;  

// export default veer; means if we import this file in any other file with any name (say xyz) and print xyz we will get value of veer 

export default veer;

export{a}// when we write like this we are not exporting these values as default and we have to  import these values with same name as given here otherwise we can have an error   
export{b}// when we write like this we are not exporting these values as default and we have to  import these values with same name as given here otherwise we can have an error   


// SO, THE MAIN DIFFERENCE BETWEEN EXPORT AND EXPORT DEFAULT IS, WHEN WE IMPORT DEFAULT EXPROT WE CAN IMPORT IT WITH ANY NAME BUT WHEN WE IMPORT AN NON DERFAULT EXPORT VALUE WE HAVE TO IMPORT IT WITH SAME NAME AS GIVEN IN EXPORTED FILE   