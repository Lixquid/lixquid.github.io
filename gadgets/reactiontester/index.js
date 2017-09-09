(function() {
  var activeTimer, bestTime, eAverage, eBest, eReset, eSpeed, reactTime, state, times;

  eSpeed = document.getElementById("output--speed");

  eAverage = document.getElementById("output--average");

  eBest = document.getElementById("output--best");

  eReset = document.getElementById("input--reset");

  state = 0;

  reactTime = null;

  activeTimer = null;

  times = [];

  bestTime = 2e308;

  document.getElementById("react--act").addEventListener("click", function() {
    var t;
    if (state === 0) {
      state = 1;
      this.classList.remove("btn-primary");
      this.classList.add("btn-secondary");
      this.textContent = "Wait for it..";
      return activeTimer = setTimeout((function(_this) {
        return function() {
          if (state === 0) {
            return;
          }
          state = 2;
          reactTime = new Date;
          _this.classList.remove("btn-secondary");
          _this.classList.add("btn-success");
          return _this.textContent = "React!";
        };
      })(this), Math.random() * 2000 + 1000);
    } else if (state === 1) {
      state = 0;
      this.classList.remove("btn-secondary");
      this.classList.add("btn-primary");
      this.textContent = "Try Again";
      eSpeed.value = "Too soon!";
      return clearTimeout(activeTimer);
    } else if (state === 2) {
      state = 0;
      this.classList.remove("btn-success");
      this.classList.add("btn-primary");
      this.textContent = "Again";
      t = new Date - reactTime;
      times.push(t);
      bestTime = Math.min(bestTime, t);
      eSpeed.value = t;
      eBest.value = bestTime;
      eAverage.value = Math.floor(times.reduce(function(a, b) {
        return a + b;
      }) / times.length);
      return eReset.disabled = false;
    }
  });

  eReset.addEventListener("click", function() {
    this.disabled = true;
    bestTime = 2e308;
    times = [];
    eBest.value = "";
    return eAverage.value = "";
  });

}).call(this);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FkZ2V0cy9yZWFjdGlvbnRlc3Rlci9pbmRleC5qcyIsInNvdXJjZXMiOlsiZ2FkZ2V0cy9yZWFjdGlvbnRlc3Rlci9pbmRleC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBOztFQUFBLE1BQUEsR0FBUyxRQUFRLENBQUMsY0FBVCxDQUF3QixlQUF4Qjs7RUFDVCxRQUFBLEdBQVcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsaUJBQXhCOztFQUNYLEtBQUEsR0FBUSxRQUFRLENBQUMsY0FBVCxDQUF3QixjQUF4Qjs7RUFDUixNQUFBLEdBQVMsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsY0FBeEI7O0VBR1QsS0FBQSxHQUFROztFQUNSLFNBQUEsR0FBWTs7RUFDWixXQUFBLEdBQWM7O0VBQ2QsS0FBQSxHQUFROztFQUNSLFFBQUEsR0FBVzs7RUFFWCxRQUFRLENBQUMsY0FBVCxDQUF5QixZQUF6QixDQUF1QyxDQUFDLGdCQUF4QyxDQUF5RCxPQUF6RCxFQUFrRSxTQUFBO0FBQ2pFLFFBQUE7SUFBQSxJQUFHLEtBQUEsS0FBUyxDQUFaO01BQ0MsS0FBQSxHQUFRO01BQ1IsSUFBQyxDQUFBLFNBQVMsQ0FBQyxNQUFYLENBQWtCLGFBQWxCO01BQ0EsSUFBQyxDQUFBLFNBQVMsQ0FBQyxHQUFYLENBQWUsZUFBZjtNQUNBLElBQUMsQ0FBQSxXQUFELEdBQWU7YUFDZixXQUFBLEdBQWMsVUFBQSxDQUFZLENBQUEsU0FBQSxLQUFBO2VBQUEsU0FBQTtVQUN6QixJQUFVLEtBQUEsS0FBUyxDQUFuQjtBQUFBLG1CQUFBOztVQUNBLEtBQUEsR0FBUTtVQUNSLFNBQUEsR0FBWSxJQUFJO1VBQ2hCLEtBQUMsQ0FBQSxTQUFTLENBQUMsTUFBWCxDQUFrQixlQUFsQjtVQUNBLEtBQUMsQ0FBQSxTQUFTLENBQUMsR0FBWCxDQUFlLGFBQWY7aUJBQ0EsS0FBQyxDQUFBLFdBQUQsR0FBZTtRQU5VO01BQUEsQ0FBQSxDQUFBLENBQUEsSUFBQSxDQUFaLEVBT1osSUFBSSxDQUFDLE1BQUwsQ0FBQSxDQUFBLEdBQWdCLElBQWhCLEdBQXVCLElBUFgsRUFMZjtLQUFBLE1BYUssSUFBRyxLQUFBLEtBQVMsQ0FBWjtNQUNKLEtBQUEsR0FBUTtNQUNSLElBQUMsQ0FBQSxTQUFTLENBQUMsTUFBWCxDQUFrQixlQUFsQjtNQUNBLElBQUMsQ0FBQSxTQUFTLENBQUMsR0FBWCxDQUFlLGFBQWY7TUFDQSxJQUFDLENBQUEsV0FBRCxHQUFlO01BQ2YsTUFBTSxDQUFDLEtBQVAsR0FBZTthQUNmLFlBQUEsQ0FBYyxXQUFkLEVBTkk7S0FBQSxNQU9BLElBQUcsS0FBQSxLQUFTLENBQVo7TUFDSixLQUFBLEdBQVE7TUFDUixJQUFDLENBQUEsU0FBUyxDQUFDLE1BQVgsQ0FBa0IsYUFBbEI7TUFDQSxJQUFDLENBQUEsU0FBUyxDQUFDLEdBQVgsQ0FBZSxhQUFmO01BQ0EsSUFBQyxDQUFBLFdBQUQsR0FBZTtNQUNmLENBQUEsR0FBSSxJQUFJLElBQUosR0FBVztNQUNmLEtBQUssQ0FBQyxJQUFOLENBQVcsQ0FBWDtNQUNBLFFBQUEsR0FBVyxJQUFJLENBQUMsR0FBTCxDQUFVLFFBQVYsRUFBb0IsQ0FBcEI7TUFFWCxNQUFNLENBQUMsS0FBUCxHQUFlO01BQ2YsS0FBSyxDQUFDLEtBQU4sR0FBYztNQUNkLFFBQVEsQ0FBQyxLQUFULEdBQWlCLElBQUksQ0FBQyxLQUFMLENBQ2hCLEtBQUssQ0FBQyxNQUFOLENBQWMsU0FBRSxDQUFGLEVBQUssQ0FBTDtlQUFZLENBQUEsR0FBSTtNQUFoQixDQUFkLENBQUEsR0FBb0MsS0FBSyxDQUFDLE1BRDFCO2FBRWpCLE1BQU0sQ0FBQyxRQUFQLEdBQWtCLE1BYmQ7O0VBckI0RCxDQUFsRTs7RUFvQ0EsTUFBTSxDQUFDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFNBQUE7SUFDaEMsSUFBQyxDQUFBLFFBQUQsR0FBWTtJQUNaLFFBQUEsR0FBVztJQUNYLEtBQUEsR0FBUTtJQUNSLEtBQUssQ0FBQyxLQUFOLEdBQWM7V0FDZCxRQUFRLENBQUMsS0FBVCxHQUFpQjtFQUxlLENBQWpDO0FBaERBIiwic291cmNlc0NvbnRlbnQiOlsiZVNwZWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgXCJvdXRwdXQtLXNwZWVkXCJcbmVBdmVyYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQgXCJvdXRwdXQtLWF2ZXJhZ2VcIlxuZUJlc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCBcIm91dHB1dC0tYmVzdFwiXG5lUmVzZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCBcImlucHV0LS1yZXNldFwiXG5cbiMgMDogTm90IHJ1bm5pbmcsIDE6IFByZSwgMjogUmVhY3RcbnN0YXRlID0gMFxucmVhY3RUaW1lID0gbnVsbFxuYWN0aXZlVGltZXIgPSBudWxsXG50aW1lcyA9IFtdXG5iZXN0VGltZSA9IEluZmluaXR5XG5cbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBcInJlYWN0LS1hY3RcIiApLmFkZEV2ZW50TGlzdGVuZXIgXCJjbGlja1wiLCAtPlxuXHRpZiBzdGF0ZSA9PSAwXG5cdFx0c3RhdGUgPSAxXG5cdFx0QGNsYXNzTGlzdC5yZW1vdmUgXCJidG4tcHJpbWFyeVwiXG5cdFx0QGNsYXNzTGlzdC5hZGQgXCJidG4tc2Vjb25kYXJ5XCJcblx0XHRAdGV4dENvbnRlbnQgPSBcIldhaXQgZm9yIGl0Li5cIlxuXHRcdGFjdGl2ZVRpbWVyID0gc2V0VGltZW91dCggPT5cblx0XHRcdHJldHVybiBpZiBzdGF0ZSA9PSAwXG5cdFx0XHRzdGF0ZSA9IDJcblx0XHRcdHJlYWN0VGltZSA9IG5ldyBEYXRlXG5cdFx0XHRAY2xhc3NMaXN0LnJlbW92ZSBcImJ0bi1zZWNvbmRhcnlcIlxuXHRcdFx0QGNsYXNzTGlzdC5hZGQgXCJidG4tc3VjY2Vzc1wiXG5cdFx0XHRAdGV4dENvbnRlbnQgPSBcIlJlYWN0IVwiXG5cdFx0LCBNYXRoLnJhbmRvbSgpICogMjAwMCArIDEwMDAgKVxuXHRlbHNlIGlmIHN0YXRlID09IDFcblx0XHRzdGF0ZSA9IDBcblx0XHRAY2xhc3NMaXN0LnJlbW92ZSBcImJ0bi1zZWNvbmRhcnlcIlxuXHRcdEBjbGFzc0xpc3QuYWRkIFwiYnRuLXByaW1hcnlcIlxuXHRcdEB0ZXh0Q29udGVudCA9IFwiVHJ5IEFnYWluXCJcblx0XHRlU3BlZWQudmFsdWUgPSBcIlRvbyBzb29uIVwiXG5cdFx0Y2xlYXJUaW1lb3V0KCBhY3RpdmVUaW1lciApXG5cdGVsc2UgaWYgc3RhdGUgPT0gMlxuXHRcdHN0YXRlID0gMFxuXHRcdEBjbGFzc0xpc3QucmVtb3ZlIFwiYnRuLXN1Y2Nlc3NcIlxuXHRcdEBjbGFzc0xpc3QuYWRkIFwiYnRuLXByaW1hcnlcIlxuXHRcdEB0ZXh0Q29udGVudCA9IFwiQWdhaW5cIlxuXHRcdHQgPSBuZXcgRGF0ZSAtIHJlYWN0VGltZVxuXHRcdHRpbWVzLnB1c2ggdFxuXHRcdGJlc3RUaW1lID0gTWF0aC5taW4oIGJlc3RUaW1lLCB0IClcblxuXHRcdGVTcGVlZC52YWx1ZSA9IHRcblx0XHRlQmVzdC52YWx1ZSA9IGJlc3RUaW1lXG5cdFx0ZUF2ZXJhZ2UudmFsdWUgPSBNYXRoLmZsb29yKFxuXHRcdFx0dGltZXMucmVkdWNlKCAoIGEsIGIgKSAtPiBhICsgYiApIC8gdGltZXMubGVuZ3RoIClcblx0XHRlUmVzZXQuZGlzYWJsZWQgPSBmYWxzZVxuXG5lUmVzZXQuYWRkRXZlbnRMaXN0ZW5lciBcImNsaWNrXCIsIC0+XG5cdEBkaXNhYmxlZCA9IHRydWVcblx0YmVzdFRpbWUgPSBJbmZpbml0eVxuXHR0aW1lcyA9IFtdXG5cdGVCZXN0LnZhbHVlID0gXCJcIlxuXHRlQXZlcmFnZS52YWx1ZSA9IFwiXCJcbiJdfQ==