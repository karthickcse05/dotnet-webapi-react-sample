using ExamCenterDAL.Interface;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace ExamCenterDAL
{
    public class ExamCenter : IExamCenter
    {
        public DataTable getExamCenter(string connectionstring)
        {
            DataTable dt = new DataTable();
            SqlDataReader reader;
            using (SqlConnection connection = new SqlConnection(connectionstring))
            {
                connection.Open();
                using (SqlCommand command = new SqlCommand("sp_getallexamcentres", connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    reader = command.ExecuteReader();
                    dt.Load(reader);
                    reader.Close();
                    connection.Close();
                }
            }
            return dt;
        }
    }
}
