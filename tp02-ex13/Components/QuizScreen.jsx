
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Question from './Question';
import { questions } from '../Utils/Utils';


export default function QuizScreen({ navigation }) {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);

    const handleAnswer = (selectedOption) => {
        if (selectedOption === questions[currentQuestionIndex].correctOption) {
            setScore(score + 1);
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            navigation.navigate('Result', { score });
        }
    };

    return (
        <View style={styles.container}>
            <Question
                question={questions[currentQuestionIndex].question}
                options={questions[currentQuestionIndex].options}
                onAnswer={handleAnswer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#222',
    },
});
