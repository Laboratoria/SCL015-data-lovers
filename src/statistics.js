const containerChart = document.getElementById('myChart').getContext('2d'); // contexto en "2D"
const theChart = new Chart(containerChart,{
  type:"pie",
  data: {
    labels: ["Normal", "Fuego"," Agua", "Planta", "Electrico", "Hielo", "Lucha", "Veneno", "Tierra", "Volador", "Psiquico", "Bicho", "Roca", "Fantasma", "Dragón", "Siniestro", "Acero", "Hada"],
    datasets:[{
      label: "Porcentage",
      data:[15.5, 8.8, 19.9, 9.6, 6.8, 4, 4.4, 14.7, 9.6, 15.1, 9.6, 8.8, 7.2, 1.6, 1.6, 2.4, 1.6, 3.2],
      backgroundColor: [
        'rgba(155, 89, 182)',
        'rgba(243, 34, 5)',
        'rgba(54, 162, 235)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)',
        'rgba(39, 208, 249)',
        'rgba(218, 247, 166)',
        'rgba(147, 81, 22)',
        'rgba(243, 5, 204 )',
        'rgba(236, 112, 99)',
        'rgba(243, 171, 5)',
        'rgba(112, 123, 124)',
        'rgba(228, 215, 222)',
        'rgba(240, 162, 203 )',
        'rgba(134, 47, 93)',
        'rgba(53, 51, 52)',
        'rgba(235, 30, 139)'
    ],
    }]
  }
    
}
)