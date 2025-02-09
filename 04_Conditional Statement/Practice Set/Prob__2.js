/* Problem Statement:
     Write a code which can gives grades to Students
    according to their score:
   90 - 100 ,A
   70 - 79 , B 
   60 - 69 , C
   50 - 59 , D
   0 - 49 ,  Fail
*/

let score = prompt("Enter the Score :");

if(score <= 100 && score >= 90 )
{
    console.log("Grade A");
}
else if(score <= 79 && score >= 70)
{
    console.log("Grade B");
}
else if(score <= 69 && score >= 60)
    {
        console.log("Grade C");
    }
    else if(score <= 59 && score >= 50)
        {
            console.log("Grade D");
        }
    else if (score <= 0 && score >= 49)
            {
                console.log("Student is Fail");
            }

            
    