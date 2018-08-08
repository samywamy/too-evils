class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.text :answer_1
      t.text :answer_2
      t.integer :votes_answer_1
      t.integer :votes_answer_2
      t.integer :question_votes
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
