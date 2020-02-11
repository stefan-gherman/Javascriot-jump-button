from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


@app.route('/')
def return_index():
    return render_template('index.html')


@app.route('/second_page')
def return_second_page():

    question_header = request.values.get('text')
    answer = request.values.get('drop')

    print(question_header, answer)
    return render_template('second_page.html', question_header= question_header, answer = answer);


if __name__ == '__main__':
    app.run(debug=True)
