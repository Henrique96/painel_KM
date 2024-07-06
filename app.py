from flask import Flask, render_template
import subprocess

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/run-script')
def run_script():
    subprocess.run(['python', 'your_script.py'])  # Altere 'your_script.py' para o nome do seu script Python
    return 'Script Executado!'

if __name__ == '__main__':
    app.run(debug=True)
