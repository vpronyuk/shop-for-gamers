var selectSingle=document.querySelector(".select"),selectSingle_title=selectSingle.querySelector(".select__title"),selectSingle_labels=selectSingle.querySelectorAll(".select__label");selectSingle_title.addEventListener("click",(function(){"active"===selectSingle.getAttribute("data-state")?selectSingle.setAttribute("data-state",""):selectSingle.setAttribute("data-state","active")}));for(var i=0;i<selectSingle_labels.length;i++)selectSingle_labels[i].addEventListener("click",(function(e){selectSingle_title.textContent=e.target.textContent,selectSingle.setAttribute("data-state","")}));var selectSingleQuantity=document.querySelector(".quantity"),selectSingleQuantity_title=selectSingleQuantity.querySelector(".quantity-select__title"),selectSingleQuantity_labels=selectSingleQuantity.querySelectorAll(".quantity-select__label");selectSingleQuantity_title.addEventListener("click",(function(){"active"===selectSingleQuantity.getAttribute("data-state")?selectSingleQuantity.setAttribute("data-state",""):selectSingleQuantity.setAttribute("data-state","active")}));for(var i1=0;i1<selectSingleQuantity_labels.length;i1++)selectSingleQuantity_labels[i1].addEventListener("click",(function(e){selectSingleQuantity_title.textContent=e.target.textContent,selectSingleQuantity.setAttribute("data-state","")}));var selectSinglePayment=document.querySelector(".payment"),selectSinglePayment_title=selectSinglePayment.querySelector(".payment-select__title"),selectSinglePayment_labels=selectSinglePayment.querySelectorAll(".payment-select__label");selectSinglePayment_title.addEventListener("click",(function(){"active"===selectSinglePayment.getAttribute("data-state")?selectSinglePayment.setAttribute("data-state",""):selectSinglePayment.setAttribute("data-state","active")}));for(var i2=0;i2<selectSingleQuantity_labels.length;i2++)selectSinglePayment_labels[i2].addEventListener("click",(function(e){selectSinglePayment_title.textContent=e.target.textContent,selectSinglePayment.setAttribute("data-state","")}));
//# sourceMappingURL=take-order.a9a81fb6.js.map
