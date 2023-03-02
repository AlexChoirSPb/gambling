function myFunctionShow1() {
    var list1 = document.querySelector(".list1"),
    // list2 = document.querySelector(".list2"),
    list3 = document.querySelector(".list3"),
    list4 = document.querySelector(".list4");
    list1.classList.remove("hidden");
    // list2.classList.add("hidden");
    list3.classList.add("hidden");
    list4.classList.add("hidden");    
  }

  // function myFunctionShow2() {
  //   var list1 = document.querySelector(".list1"),
  //   list2 = document.querySelector(".list2"),
  //   list3 = document.querySelector(".list3"),
  //   list4 = document.querySelector(".list4");
  //   list2.classList.remove("hidden");
  //   list1.classList.add("hidden");
  //   list3.classList.add("hidden");
  //   list4.classList.add("hidden");    
  // }

  function myFunctionShow3() {
    var list1 = document.querySelector(".list1"),
    // list2 = document.querySelector(".list2"),
    list3 = document.querySelector(".list3"),
    list4 = document.querySelector(".list4");
    list3.classList.remove("hidden");
    // list2.classList.add("hidden");
    list1.classList.add("hidden");
    list4.classList.add("hidden");    
  }

  function myFunctionShow4() {
    var list1 = document.querySelector(".list1"),
    // list2 = document.querySelector(".list2"),
    list3 = document.querySelector(".list3"),
    list4 = document.querySelector(".list4");
    list4.classList.remove("hidden");
    // list2.classList.add("hidden");
    list3.classList.add("hidden");
    list1.classList.add("hidden");    
  }

  function myFunctionShow() {
    let action = document.querySelector(".action");
    action.classList.toggle("hidden");
  }

setTimeout(myFunctionShow, 3000);

function hideContent() {
    document.querySelector('.alert-content').classList.toggle('hidden');
}

function hideName() {
    document.querySelector('.alert-name').classList.toggle('hidden');
}

function hideEmail() {
    document.querySelector('.alert-email').classList.toggle('hidden');
}

    function inputCheck() {
    let content=document.forms["form"]["content"];
    let name=document.forms["form"]["name"];
    let email=document.forms["form"]["email"]; 
    console.log(content + "CERF");
    if (content.value.length==0) {
        hideContent();
            setTimeout(hideContent, 2000);
    } else if (name.value.length==0) {
        hideName();
            setTimeout(hideName, 2000);
      } else if (email.value.length==0 || (!(email.value.includes('@')))) {
        hideEmail();
            setTimeout(hideEmail, 2000);
        } else {
          content.value='';
          name.value='';
          email.value='';
        }
    }