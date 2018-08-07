class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.text :answer_1
      t.text :answer_2
      t.integer :votes_1
      t.integer :votes_2
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
