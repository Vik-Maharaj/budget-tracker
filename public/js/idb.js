let db;
const request = indexedDB.open("budget_tracker", 1);

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  db.createObjectStore("pending_object", { autoIncrement: true });
};

// check to see if the app is online, if so, then runs uploadBudget()
request.onsuccess = function (event) {
  db = event.target.result;
  if (navigator.onLine) {
    uploadBudget();
  }
};
request.onerror = function (event) {
  console.log(event.target.errorcode);
};

// if there's no connection, the run saveRecord()
function saveRecord(record) {

  const transaction = db.transaction(["pending_object"], "readwrite");

  const transactionObjectStore = transaction.objectStore("pending_objectt");

  transactionObjectStore.add(record);
}
