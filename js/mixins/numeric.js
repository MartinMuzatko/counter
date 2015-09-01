var numeric =
{

	// Numeric Tools
	// Ranges, Commarizing, Randomizing, Chances

	commarize : function(num) 
	{
		var parts = num.toString().split(".")
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")

		return parts.join(".")
	},

	random : function(min, max) 
	{
		return Math.floor(Math.random() * (max - min + 1) + min)
	},

	chance : function(percent) 
	{
		return random(0,100) <= percent ? true : false
	},

	range : function(start, end)
	{
		var array = []
		c = end - start + 1
		while (c--)
		{
			array[c] = end--
		}
		return array
	},

	modRange : function(start, end, step)
	{
		step = step || 24
		var array = []
		end = end < start ? end + step : end
		c = parseInt(end) - parseInt(start) + 1
		while (c--)
		{
			array[c] = parseInt(end--) % step
		}
		return array
	},

	pad : function (n, width, z)
	{
		z = z || '0'
		n = n + ''
		return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n
	},

	dynamicSort : function(property) 
	{
		var sortOrder = 1
		if(property[0] === "-")
		{
			sortOrder = -1
			property = property.substr(1)
		}
		return function (a,b) 
		{
			a = a[property].toString().toUpperCase()
			b = b[property].toString().toUpperCase()
			var result = (a < b) ? -1 : (a > b) ? 1 : 0
			return result * sortOrder
		}
	},

	getDate : function(timestamp)
	{
		timestamp = timestamp || new Date().getTime()
		// Timestamp is in seconds, not milliseconds
		var date = new Date(parseInt(timestamp)*1e3)

		return  this.pad(date.getDate(),2) + '.' + 
				this.pad(date.getMonth()+1,2)
	
	},

	getTime : function(timestamp)
	{
		timestamp = timestamp || new Date().getTime()
		// Timestamp is in seconds, not milliseconds
		var date = new Date(parseInt(timestamp)*1e3)
		return  this.pad(date.getHours(),2)  + ':' + 
				this.pad(date.getMinutes(),2)  + ':' + 
				this.pad(date.getSeconds(),2)
	},

}