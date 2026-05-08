const Log = async (stack, level, packageName, message) => {
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzZWx2YXNoYXJhbi5hZDIzQGJpdHNhdGh5LmFjLmluIiwiZXhwIjoxNzc4MjMyNjg1LCJpYXQiOjE3NzgyMzE3ODUsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiI3YTlhNjM4Ni1jODA1LTRkYWItYWQ1NC1iODc2NmQzZDUzZmMiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJzZWx2YSBzaGFyYW4gcCIsInN1YiI6IjZkODBlNDJjLWRjZGItNDRhMC1iNjM4LWU2MjIwYjliOTliYSJ9LCJlbWFpbCI6InNlbHZhc2hhcmFuLmFkMjNAYml0c2F0aHkuYWMuaW4iLCJuYW1lIjoic2VsdmEgc2hhcmFuIHAiLCJyb2xsTm8iOiI3Mzc2MjMyYWQyNDYiLCJhY2Nlc3NDb2RlIjoidUthSmZtIiwiY2xpZW50SUQiOiI2ZDgwZTQyYy1kY2RiLTQ0YTAtYjYzOC1lNjIyMGI5Yjk5YmEiLCJjbGllbnRTZWNyZXQiOiJhSGhiSmZnRXlKeUJoUXRDIn0.ET-QEjY9Rn-h9IP-A5M6MswE-1e8IwSzBN0SKiCxj_I";
  const logData = {
    stack: stack,
    level: level,
    package: packageName,
    message: message,
  };
  try {
    const response = await fetch(
      "http://4.224.186.213/evaluation-service/logs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        body: JSON.stringify(logData),
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.log("Error while sending log");
    console.log(err);
  }
};
export default Log;