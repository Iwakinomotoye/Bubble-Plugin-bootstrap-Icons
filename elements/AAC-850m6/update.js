function(instance, properties, context) {

    var biIconEl = document.createElement("i");
    var elWidth = properties.bubble.width();
    var elHeight = properties.bubble.height();
    var iconName = properties.icon_name;
    var dynamicName = properties.dynamic_name;
    var iconColor = properties.icon_color;
    
    if (dynamicName) {
      iconName = dynamicName;
    }
    
    biIconEl.classList.add("bi-" + iconName);
    
    biIconEl.style.color = iconColor;
    if (elWidth > elHeight) {
      biIconEl.style.fontSize = elHeight + "px";
    } else {
      biIconEl.style.fontSize = elWidth + "px";   
    }
    
    if (instance.canvas[0].firstElementChild) {
        instance.canvas[0].removeChild(instance.canvas[0].firstElementChild);
    }
    
	instance.canvas.append(biIconEl);
	
}