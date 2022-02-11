


        function handleLoginSubmition(event){
            
                event.preventDefault()

                var formData=new FormData(event.target)
                // let topics=formData.getAll("topics")
                // !formData.get("name") ? formData.set("name" ,"hala") : ""
                // !formData.get("id") ? formData.set("id",30):""
                // formData.append("GPA",90)
                // formData.append("job","Web dev")
                var object=Object.fromEntries(formData.entries())
                // object["topics"]=topics //get all values of the multi value input fieldd
                console.log(object)

                var str_json=JSON.stringify(object)

                // var arr = { City: '%{}Moscow', Age: 25 };
                $.ajax({
                    url: `/login`,
                    type: 'POST',
                    data:JSON.stringify( object),
                    contentType:'application/json; charset=utf-8 ',
                    dataType: 'json',
                    async: false,
                    success: function(msg) {
                        alert(msg.userphone);
                    }
                });

        }

         const form1=document.getElementsByTagName('form')[0]
        form1.addEventListener('submit', handleLoginSubmition)




        function handleRegisterSubmition(event){
            
            event.preventDefault()

            let formData=new FormData(event.target)
            console.log(` object :>> ${formData}`);
            let newuser=Object.fromEntries(formData.entries())
            // object["topics"]=topics //get all values of the multi value input fieldd
            console.log(newuser)

            // var str_json=JSON.stringify(newuser)

            $.ajax({
                url: `/register`,
                type: 'POST',
                data:JSON.stringify(newuser),
                contentType:'application/json; charset=utf-8 ',
                dataType: 'json',
                async: false,
                success: function(msg) {
                    alert(msg);
                }
            });

    }
        const register=document.getElementById('registerform')
        register.addEventListener('submit', handleRegisterSubmition)



        

