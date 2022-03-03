function(instance, properties) {
    
    var biIconEl = document.createElement("img");
    var iconName = properties.icon_name;
    var dynamicName = properties.dynamic_name;
    var iconColor = properties.icon_color;
    var elWidth = properties.bubble.width();
    var elHeight = properties.bubble.height();
    
    if (dynamicName) {
      iconName = dynamicName;
    }
    
    biIconEl.src = 'https://raw.githubusercontent.com/twbs/icons/4bfa65e0634e141f3924b09f1c769641cba2ce5e/icons/' + iconName + '.svg';
    
    if (elWidth > elHeight) {
      biIconEl.style.width = elHeight + "px";
    } else {
      biIconEl.style.width = elWidth + "px";   
    }
    
    if (instance.canvas[0].firstElementChild) {
        instance.canvas[0].removeChild(instance.canvas[0].firstElementChild);
    }
    
	instance.canvas.append(biIconEl);

}