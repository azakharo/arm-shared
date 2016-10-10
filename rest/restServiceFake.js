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

    function getStatPassengersAvgPerHour(dtStart, dtEnd, numOfDays) {
      var deffered = $q.defer();
      var data = [];

      var hours = _.times(24, h => h);

      hours.forEach(function (hour) {
        var statItemInd = hour;
        data.push(_.random(100));
      });

      deffered.resolve(data);

      return deffered.promise;
    }

    function getStatPassKmPerDayPerOrg(dtStart, dtFinish) {
      var deffered = $q.defer();

      var orgs = _.times(3, ind => "Организация " + (ind + 1));

      var days = getDays(dtStart, dtFinish);

      var retVal = [];
      orgs.forEach(function (org) {
        var orgItem = {
          name: org
        };
        var passKms = [];
        days.forEach(function (day, dayIndex) {
          passKms.push({
            day: day,
            passKm: _.round(_.random(0, 1000, true), 3)
          });
        });
        orgItem.passKms = passKms;
        retVal.push(orgItem);
      });

      deffered.resolve(retVal);

      return deffered.promise;
    }

    // Return public API
    return {
      getStatPassengersPerDay:  getStatPassengersPerDay,
      getStatBusesPerDay:       getStatBusesPerDay,
      getStatPassengersAvgPerHour: getStatPassengersAvgPerHour,
      getStatPassKmPerDayPerOrg: getStatPassKmPerDayPerOrg
    };

  });
