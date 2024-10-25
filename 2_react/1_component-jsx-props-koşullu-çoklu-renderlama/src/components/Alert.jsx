const Alert = (props) => {
  return (
    <div className={`alert ${props.tema}`}>
      {/* temaya göre bildirim metnini belirle */}

      {props.tema === "uyari"
        ? "Bu işlemi gerçekleştirmezsiniz"
        : props.tema === "basari"
        ? "İşlem Başarılı Oldu"
        : props.tema === "hata"
        ? "İşlem başarısız oldu"
        : "Tema belirlenmedi"}
    </div>
  );
};

export default Alert;
