import openpyxl

book = openpyxl.load_workbook('app/Acompanhamento_SIN.xlsx')

frutas_page = book['Lista']

for rows in frutas_page.iter_rows(min_row=2,max_row=5):
    for cell in rows:
        print(cell.value)

