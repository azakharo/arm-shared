'use strict';

var mod = angular.module('restServiceFake', []);

mod.service(
  "restFake",
  function ($q) {

    function getStatPassengersPerDay(dtStart, dtEnd) {
      var deffered = $q.defer();

      var data = [];
      var days = getDays(dtStart, dtEnd);

      days.forEach(function (day, dayIndex) {
        data.push({
          day: day,
          passengers: _.random(100),
          passCountErr: _.random(0, 15, true) / 100
        });
      });

      deffered.resolve(data);

      return deffered.promise;
    }

    function getStatBusesPerDay(dtStart, dtEnd) {
      var deffered = $q.defer();

      var data = [];
      var days = getDays(dtStart, dtEnd);

      days.forEach(function (day, dayIndex) {
        data.push({
          day: day,
          buses: _.random(10)
        });
      });

      deffered.resolve(data);

      return deffered.promise;
    }

    // Return public API
    return {
      getStatPassengersPerDay:  getStatPassengersPerDay,
      getStatBusesPerDay:       getStatBusesPerDay
    };

  });
