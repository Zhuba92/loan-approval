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
                        min: " Need a higher number",
                        max: " Need a lower number",
                        digits: " Not a number"
                    },
                credit:
                    {
                        required: "P lease input a number",
                        min: " Need a higher number",
                        max: " Need a lower number",
                        digits: " Not a number"
                    },
                months:
                    {
                        required: " Please input a number",
                        min: " Need a higher number",
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

            if(salary >= 40000)
            {
                if(credit >= 600)
                {
                    $("#output").text(`You have been approved`);
                }
                else if(credit < 600 && months > 12)
                {
                    $("#output").text(`You have been approved`);
                }
                else if(credit < 600 && months <= 12)
                {
                    $("#output").text(`You have been denied`);
                }
                else
                {
                    $("#output").text(`Please fill in the above information`);
                }
            }
            else if(salary < 40000)
            {
                if(credit >= 600 && months > 12)
                {
                    $("#output").text(`You have been approved`);
                }
                else if(credit >= 600 && months <= 12)
                {
                    $("#output").text(`You have been denied`);
                }
                else if(credit < 600)
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