class Example < ApplicationRecord
  has_one_attached :csv

  def csv_to_json
    csv = self.csv.download
    csv = CSV.parse(csv, headers: true)
    csv = csv.map(&:to_h)
    csv.to_json
  end
end
