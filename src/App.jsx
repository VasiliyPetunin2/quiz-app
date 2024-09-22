import styles from './App.module.css';
import { useState } from "react";
import { Welcome, QuestionPage, Result } from "@/pages/index.js";
import { Header, Footer, Card } from '@/components/ui/index.js';
import questionsData from '@/data/quizz_questions.json';

function App() {
  const [page, setPage] = useState('welcome');

  return (
    <div className={styles.container}>
      <Header page={page} setPage={setPage} />
      <Card questionsData={questionsData} >
        {page === 'welcome' && <Welcome setPage={setPage} />}
        {page === 'question' && <QuestionPage page={'question'} setPage={setPage} />}
        {page === 'result' && <Result setPage={setPage} />}
      </Card>
      <Footer />
    </div>
  )
}

export default App
