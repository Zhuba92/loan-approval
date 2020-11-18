$(document).ready(
    function () {
        $("#submit").click(calculateApproval);

        var myRules =
            {
                salary:
                    {
                        required: true,
                        min: 0,
                        max: 2000000,
                        digits: true
                    },
                credit:
                    {
                        required: true,
                        min: 300,
                        max: 850,
                        digits: true
                    },
                months:
                    {
                        required: true,
                        min: 0,
                        max: 600,
                        digits: true
                    }
            };

        var myMessages =
            {
                salary:
                    {
                        required: " Please input a number",
                        min: " Can not be less than 0",
                        max: " Need a lower number",
                        digits: " Not a number"
                    },
                credit:
                    {
                        required: "Please input a number",
                        min: " Must be at least 300",
                        max: " Can not be higher than 850",
                        digits: " Not a number"
                    },
                months:
                    {
                        required: " Please input a number",
                        min: " Can not be less than 0",
                        max: " Need a lower number",
                        digits: " Not a number"
                    }
            }

        $("form").validate(   // keep for form validation
            {
                submitHandler: calculateApproval,
                rules: myRules,
                messages: myMessages
            }
        );

        function calculateApproval()
        {
            var salary = parseInt($("#salary").val());
            var credit = parseInt($("#credit").val());
            var months = parseInt($("#months").val());

            if(salary >= 40000 && salary <= 2000000)
            {
                if(credit >= 600 && credit <= 850)
                {
                    $("#output").text(`You have been approved`);
                }
                else if((credit >= 300 && credit < 600) && (months > 12 && months < 600))
                {
                    $("#output").text(`You have been approved`);
                }
                else if((credit >= 300 && credit < 600) && (months <= 12 && months > 0))
                {
                    $("#output").text(`You have been denied`);
                }
                else
                {
                    $("#output").text(`Please fill in the above information`);
                }
            }
            else if(salary < 40000 && salary > 0)
            {
                if((credit >= 600 && credit <= 850) && (months > 12 && months < 600))
                {
                    $("#output").text(`You have been approved`);
                }
                else if((credit >= 600 && credit <= 850) && (months <= 12 && months > 0))
                {
                    $("#output").text(`You have been denied`);
                }
                else if(credit >= 300 && credit < 600)
                {
                    $("#output").text(`You have been denied`);
                }
                else
                {
                    $("#output").text(`Please fill in the above information`);
                }
            }
        }
    }
);