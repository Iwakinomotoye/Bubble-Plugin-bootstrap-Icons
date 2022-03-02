function(instance, properties, context) {

    var biIconEl = document.createElement("i");
    var elWidth = properties.bubble.width();
    var elHeight = properties.bubble.height();
    
    if (properties.dynamic_name) {
      biIconEl.classList.add("bi-" + properties.dynamic_name);
    } else {
      biIconEl.classList.add("bi-" + properties.icon_name);   
    }
    biIconEl.style.color = properties.icon_color;
    if (elWidth > elHeight) {
      biIconEl.style.fontSize = elHeight + "px";
    } else {
      biIconEl.style.fontSize = elWidth + "px";   
    }
	instance.canvas.append(biIconEl);
	
}