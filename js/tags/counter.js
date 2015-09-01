<counter>
	<div class="time" if={timeLeft > 1000}>
		<div if={timeLeft > 24*60*60*1000} class="days">		
			<span>{time.days}</span>
			<span>Days</span>
		</div>
		<div if={timeLeft > 60*60*1000} class="hours">		
			<span>{pad(time.hours, 2)}</span>
			<span>Hours</span>
		</div>
		<div if={timeLeft > 60*1000} class="minutes">	
			<span>{pad(time.minutes, 2)}</span>
			<span>Minutes</span>
		</div>
		<div class="seconds">	
			<span>{pad(time.seconds, 2)}</span>
			<span>Seconds</span>
		</div>
	</div>
	<div if={timeLeft < 1000} class="hooray">
		<h2>GalaCon 2016, Here we come!</h2>
	</div>

	<script>

	this.mixin('numeric')

	this.time = 
	{
		days	: 0,
		hours	: 0,
		minutes	: 0,
		seconds	: 0,
	}

	this.today = new Date()
	this.targetDate = new Date('July 30, 2016 09:00:00')
	this.timeLeft = this.targetDate.getTime() - this.today.getTime()
	//this.targetDate = new Date(this.today.getTime() + 5*1000)

	window.counter = this

	this.init = function()
	{
		this.loop = setInterval(
			function()
			{
				this.doLoop()
			}.bind(this),
			1000
		)
	}

	this.on(
		'mount',
		function()
		{
			this.init()
		}
	)

	this.doLoop = function()
	{
		this.today = new Date()
		this.timeLeft = this.targetDate.getTime() - this.today.getTime()
		e_daysLeft = this.timeLeft / (24 * 60 * 60 * 1000)
		daysLeft = Math.floor(e_daysLeft)
		e_hoursLeft = (e_daysLeft - daysLeft) * 24
		hoursLeft = Math.floor(e_hoursLeft)
		e_minutesLeft = (e_hoursLeft - hoursLeft) * 60
		minutesLeft = Math.floor(e_minutesLeft)
		e_secondsLeft = (e_minutesLeft - minutesLeft) * 60
		secondsLeft = Math.floor(e_secondsLeft)
		this.time = 
		{
			days	: daysLeft,
			hours	: hoursLeft,
			minutes	: minutesLeft,
			seconds	: secondsLeft,
		}
		if (this.timeLeft < 0)
		{
			clearInterval(this.loop)
		}
		this.update()

	}.bind(this)

	</script>
</counter>
