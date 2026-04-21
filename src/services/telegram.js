// KONFIG TELEGRAM
const TELEGRAM_BOT_TOKEN = "8356271559:AAHYC26rH4Z2vsD5AAP5IWoPxCjJgJXzKLA";
const TELEGRAM_CHAT_ID = "1734935709";

let lastStatus = null;

export function handleStatusUpdate(status) {
  const currentStatus = (status || "normal").toLowerCase();

  console.log("🔥 Status masuk:", currentStatus);

  if (currentStatus === lastStatus) {
    console.log("⏭️ Status sama, tidak kirim");
    return;
  }

  let message = "";

  if (currentStatus.includes("penuh")) {
    message = `<b>🚨PERINGATAN : TONG SAMPAH PENUH!🚨</b>

Segera Lakukan Tindakan Pengosongan Tempat Sampah !!!

<b>Terimakasih🙏🏻</b>`;
  }

  else if (currentStatus.includes("sedang")) {
    message = `<b>⚠️PERINGATAN : TONG HAMPIR PENUH!⚠️</b>

Kapasitas tong sampah sudah hampir mencapai setengah.

<b>Terimakasih🙏🏻</b>`;
  }

  else if (currentStatus.includes("normal")) {
    if (lastStatus === "penuh" || lastStatus === "sedang") {
      message = `<b>✅INFO : TEMPAT SUDAH DIKOSONGKAN!</b>

 Tong sampah sudah kembali kosong.
 
 <b>Terimakasih🙏🏻</b>`;
    }
  }

  if (message) {
    sendTelegram(message);
  }

  lastStatus = currentStatus;
}


function sendTelegram(message) {
  console.log("📨 Kirim Telegram:", message);

  fetch(
    `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${TELEGRAM_CHAT_ID}&parse_mode=HTML&text=${encodeURIComponent(message)}`
  )
    .then((res) => res.json())
    .then((res) => console.log("✅ Response:", res))
    .catch((err) => console.error("❌ Error:", err));
}